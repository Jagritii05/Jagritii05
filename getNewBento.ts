const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Jagriti&g=Jagritii05&x=Jagriti_3005&l=Jagriti%20Rai&i=https%3A%2F%2Fpng.pngtree.com%2Fbackground%2F20250102%2Foriginal%2Fpngtree-computer-of-a-programmer-with-lines-code-of-software-picture-image_15533605.jpg&p=&z=53383";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
