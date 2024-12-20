import { ContactFormData } from "./schemas";
import { ApiError, NetworkError } from "./errors";

export async function submitContactForm(data: ContactFormData): Promise<void> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate random network error (10% chance)
    if (Math.random() < 0.1) {
      throw new NetworkError("Unable to connect to the server");
    }

    // Simulate random API error (10% chance)
    if (Math.random() < 0.1) {
      throw new ApiError("Server error occurred", 500, "INTERNAL_SERVER_ERROR");
    }

    // Store in localStorage for demo purposes
    const submissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]",
    );
    submissions.push({
      ...data,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
  } catch (error) {
    if (error instanceof NetworkError || error instanceof ApiError) {
      throw error;
    }
    throw new Error("Failed to submit contact form");
  }
}
