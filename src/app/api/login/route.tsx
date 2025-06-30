import { NextRequest, NextResponse } from 'next/server';

export const users = [
  {id: 1, name: 'Pranish', email: 'pranish@mail.com', password: '123', role: 'admin'},
  {id: 2, name: 'Siddharth', email: 'sid@mail.com', password: 'abc', role: 'therapist'}
];

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  //finds from d
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 }
    );
  }


const token='mock-access-tokken'
return NextResponse.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    session: {
      userId: user.id,
      role: user.role,
    },
  });
}
