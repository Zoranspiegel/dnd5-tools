import dbConnect from '@/lib/dbConnection';
import Race from '@/models/Race';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const body: Race = await request.json();

  try {
    await dbConnect();

    const newRace = new Race(body);

    await newRace.save();

    return NextResponse.json(
      { msg: 'Race Successfully Created' },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request): Promise<NextResponse> {
  try {
    await dbConnect();

    const races = await Race.find();
    return NextResponse.json(races, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}
