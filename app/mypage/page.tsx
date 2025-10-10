import { UserCard } from '@/components/user-card'
import { verifySession } from '@/lib/session'

export default async function MypagePage() {
  const session = await verifySession()

  return (
    <div className="container">
      <h1>マイページ</h1>
      <UserCard user={session.user} />
    </div>
  )
}
