import { NextResponse } from 'next/server'

const PLANS = {
  spark_pro: { amount: 1000, description: 'Spark Pro Weekly' },
  pro_plus: { amount: 2500, description: 'Pro Plus Weekly' },
}

export async function POST(request) {
  try {
    // ✅ Lazy import (prevents build crash)
    const Razorpay = (await import('razorpay')).default

    // ✅ Check env variables
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { error: 'Razorpay not configured' },
        { status: 500 }
      )
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    const { plan, userId } = await request.json()

    if (!PLANS[plan]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const { amount } = PLANS[plan]

    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `receipt_${userId}_${Date.now()}`,
      notes: { plan, userId },
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    })

  } catch (error) {
    console.error('Razorpay order error:', error)

    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
