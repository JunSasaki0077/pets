import { User } from '@/types/user'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Card, CardContent } from './ui/card'

export function UserCard({ user }: { user: User }) {
  return (
    <Card className="max-w-sm mx-auto">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>{user.name?.[0]}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h1 className="text-lg font-bold">{user.name}</h1>
          <p className="text-muted-foreground text-sm break-all">
            {user.email}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
