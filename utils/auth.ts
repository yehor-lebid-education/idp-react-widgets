import { supabase } from './supabaseClient';

export async function verifyUser(request: Request) {
    // Extract auth token from headers (e.g. Authorization: Bearer <token>)
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) return null;

    const token = authHeader.split(' ')[1];
    if (!token) return null;

    // Use Supabase auth API to verify the token and get user
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) return null;

    return user; // return user object if valid
}
