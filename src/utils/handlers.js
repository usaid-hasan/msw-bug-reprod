import { HttpResponse, graphql, http } from 'msw';

export default [
  /* In http resolver `cookies` is available but `request.headers.get('cookie')` still returns null; */
  
  http.post('http://localhost:4000/api', ({ cookies, request }) => {
    console.log(cookies); // jwt: 1234567890
    console.log(request.headers.get('cookie')); // null
    
    if (!cookies?.jwt) {
      return HttpResponse.json({ errors: [{ message: 'You need to be signed in to access this' }]});
    }

    return HttpResponse.json({ data: { 
      user: {
        id: '507f1f77bcf86cd799439011',
        username: 'test_user',
        email: 'test_email@abc.com'
      }
    }});
  }),

  /* In graphql resolver `cookies` is undefined and `request.headers.get('cookie')` also returns null; */

  /* graphql.query('GetUser', async ({ cookies, request }) => {
    console.log(cookies); // undefined
    console.log(request.headers.get('cookie')); // null

    if (!cookies?.jwt) {
      return HttpResponse.json({ errors: [{ message: 'You need to be signed in to access this' }]});
    }

    return HttpResponse.json({ data: { 
      user: {
        id: '507f1f77bcf86cd799439011',
        username: 'test_user',
        email: 'test_email@abc.com'
      }
    }});
  }), */
];
