import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser {
    user {
      id
      username
      email
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! {error.message} </p>

  return (
    <>
      <p>{data.user.username}</p>
      <p>{data.user.email}</p>
    </>
  )
}
