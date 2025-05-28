import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gxszvbtvzgypchtpeupn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4c3p2YnR2emd5cGNodHBldXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MDM5NDEsImV4cCI6MjA2MzI3OTk0MX0.VwJYwZwk7A3WFZufvGkAdQVbofA9fsfteVEKvB7pRBI'
export const supabase = createClient(supabaseUrl, supabaseKey)
