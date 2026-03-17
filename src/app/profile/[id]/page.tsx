import ProfilePage from './ProfileDetail';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ];
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <ProfilePage params={params} />;
}
