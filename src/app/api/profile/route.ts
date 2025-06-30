// app/api/profile/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/app/api/login/route';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader) {
    return NextResponse.json(
      { message: 'Missing Authorization Header' },
      { status: 401 }
    );
  }

  const token = authHeader.replace('Bearer ', '');

  if (token !== 'mock-access-token' && token !== 'access-token') {
    return NextResponse.json(
      { message: 'Invalid or Expired Token' },
      { status: 403 }
    );
  }

  // For mocking, return the admin user or first user
  const user = users[0]; // Or fetch based on token in real implementation

  return NextResponse.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
}
