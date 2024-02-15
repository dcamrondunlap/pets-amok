const baseUrl = 'http://localhost:9001'

async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok){
    throw new Error(`Failed to fetch questions: ${response.statusText}`);
  }

  return response.json();
}

export function getQuestions() {
  const url = `${baseUrl}/api/questions`;
  return fetchData(url);
}

export function getPets() {
  const url = `${baseurl}/api/pets`;
  return fetchData(url);
}
