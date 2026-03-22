import { NextRequest, NextResponse } from "next/server";

const subscriptions = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = subscriptions.get(ip);
  if (!entry || now > entry.resetAt) {
    subscriptions.set(ip, { count: 1, resetAt: now + 3600000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email } = body;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // TODO: Integrate email list service (Mailchimp, ConvertKit, etc.) before production
    // Example with Mailchimp:
    // await mailchimp.lists.addListMember(listId, { email_address: email, status: 'subscribed' });

    if (process.env.NODE_ENV === "development") {
      console.log("Newsletter subscription:", email);
    }

    return NextResponse.json(
      { success: true, message: "You're subscribed! Check your inbox." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
