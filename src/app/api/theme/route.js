import { NextResponse } from 'next/server';

export async function POST(req) {

  const { theme } = req.json();

  const secretKey = "CuDhieuyx6z0cVoo6QhB1w19Twasow81RHVOrgseCUfrOY7GSteTiDKWRMR2BvEgdVSLaiUlZIgb9fX58yGLhZ2c9bBzEBBXmbZvvmrVPiFILdmBAXUXXU4RyHxKUha3pG8T60B1qwOTZprsDITe3IqKZi1aRFIOp7dVSauZtxyFhoKzRXPM87yiOPY4cmGG1qxH8zH7lSAlA2FDftklGVTDyjLkdrC0x5MEbCCkxql2ge"

  if(!theme || theme !== secretKey) {
    return NextResponse.json({ code: 503, message: "Service Unavailable!" });
  }else{
    return NextResponse.json({ code: 200, message: "Theme Fetch Succesfully" });
  }

  
}

