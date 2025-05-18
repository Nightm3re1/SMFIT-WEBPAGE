export const dynamic = 'force-static';

import { redirect } from 'next/navigation';

export default function TestimonialsRedirect() {
  redirect('/ro/testimoniale');
}