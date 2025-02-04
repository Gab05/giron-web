
const gironApiUrl = "https://giron-api-3371457611a0.herokuapp.com";
// eslint-disable-next-line
const gironLocalApiUrl = "http://localhost:8080";

interface SubmissionRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address?: string;
  postalCode?: string;
  city?: string;
  message: string;
}

export const triggerVisitMetaEvent = (event_name: string, payload: any = null): Promise<Response> => {
  if (process.env.NODE_ENV !== "development")
    return fetch(`${gironApiUrl}/meta-event/visit`, {
      method: "POST",
      body: JSON.stringify({ event_name, payload }),
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    })
  else return Promise.resolve({} as Response)
}

export const triggerSubmissionMetaEvent = (event_name: string, payload: any = null): Promise<Response> => {
  if (process.env.NODE_ENV !== "development")
    return fetch(`${gironApiUrl}/meta-event/submission`, {
      method: "POST",
      body: JSON.stringify({ event_name, payload }),
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    })
  else return Promise.resolve({} as Response)
}

export const postSubmissionRequest = (request: SubmissionRequest): Promise<Response> => {
  return fetch(`${gironApiUrl}/soumission`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      'content-type': 'application/json;charset=utf-8'
    }
  })
}
