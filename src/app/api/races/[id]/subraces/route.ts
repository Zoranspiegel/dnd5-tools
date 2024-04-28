import { NextResponse } from 'next/server';
import Race, { type MongooseRace } from '@/models/Race';
import dbConnect from '@/lib/dbConnection';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const body: Subrace = await request.json();

  try {
    const race: MongooseRace | null = await Race.findById(params.id);

    if (race === null) {
      return NextResponse.json(
        { msg: 'Main Race Does Not Exist' },
        { status: 400 }
      );
    }

    race.subraces?.push(body);

    await race.save();

    return NextResponse.json(
      { msg: 'Subrace Successfully Created' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    await dbConnect();

    const race = await Race.findById(params.id);

    if (!race) {
      return NextResponse.json({ msg: 'Main Race Not Found' }, { status: 404 });
    }

    const subraces = race.subraces;

    return NextResponse.json({ data: subraces }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}
