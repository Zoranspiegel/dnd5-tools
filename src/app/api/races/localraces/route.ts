import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnection';
import Race from '@/models/Race';
import races from '@/utils/races';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    await dbConnect();

    await Race.insertMany(races);

    return NextResponse.json(
      { msg: 'Local Races Successfully Created' },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}
