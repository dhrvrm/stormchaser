import { NextRequest, NextResponse } from 'next/server'

export async function POST(req, res) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN
  const endpoint = 'https://api.hubapi.com/crm/v3/objects/contacts'
  try {
    const requestBody = await req.json()
    const { email, firstname, company, phone, message, budget } = requestBody
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          email: email,
          firstname: firstname,
          company: company,
          phone: phone,
          message: message,
          budget: budget,
        },
      }),
    })
    let log = {
      properties: {
        email: req.body.email,
        firstname: req.body.firstname,
        company: req.body.company,
        phone: req.body.phone,
        message: req.body.message,
        budget: req.body.budget,
      },
    }
    console.log(log)
    if (response.ok) {
      const data = await response.json()
      return NextResponse.json(
        { message: 'Lead submitted successfully!', data },
        { status: 200 },
      )
    } else {
      const errorData = await response.json()
      console.log(errorData)
      return NextResponse.json(
        { message: 'Error submitting lead', error: errorData },
        { status: 500 },
      )
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Error submitting lead', error: error.message },
      { status: 500 },
    )
  }
}
