import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://icvytrxafrilrwpabyvp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljdnl0cnhhZnJpbHJ3cGFieXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDgxNDQsImV4cCI6MjAyNjAyNDE0NH0.h11-noPsuEQgNYXTjeprs9nFldAUgfVxUmT5zFzjECA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;