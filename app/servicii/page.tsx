export const dynamic = 'force-static';

import { redirect } from 'next/navigation';

export default function ServicesRedirect() {
  redirect('/ro/servicii');
}