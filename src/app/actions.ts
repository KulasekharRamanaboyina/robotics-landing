"use server";

export async function submitContactForm(formData: {
  name: string;
  email: string;
  challenge: string;
  message: string;
}) {
  const url = process.env.GOOGLE_SHEETS_WEBAPP_URL;
  if (!url) {
    console.warn("GOOGLE_SHEETS_WEBAPP_URL is not configured. Form will fall back to standard redirect.");
    return { success: true, warned: true };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
        ...formData,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return { success: result.success !== false };
  } catch (error) {
    console.error("Failed to submit form to Google Sheets:", error);
    return { success: false, error: "Failed to submit request" };
  }
}
