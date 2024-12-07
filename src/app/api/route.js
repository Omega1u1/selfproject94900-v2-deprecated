import connectToDatabase from '../lib/mongodb';
import Ticket from '../(model)/ticket';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await connectToDatabase(); // Ensure DB connection

        const body = await req.json(); // Parse the incoming JSON request

        // Create a new ticket in the database
        const ticket = await Ticket.create(body);

        return NextResponse.json({ message: 'Ticket created successfully', ticket }, { status: 201 });
    } catch (error) {
        console.error('Error creating ticket:', error);
        return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
    }
}
