import { verifyUser } from '../utils/auth';
import { supabase } from '../utils/supabaseClient';

export async function POST(request: Request) {
    try {
        const user = await verifyUser(request);
        if (!user) {
            return new Response(JSON.stringify({ error: 'Not Authorized' }), { status: 401 });
        }

        const body = await request.json();
        // body should contain data you want to insert or update, e.g. { user_id, title, ... }

        const { data, error } = await supabase
            .from('tabs')
            .insert(body)
            .select();

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
    }
}