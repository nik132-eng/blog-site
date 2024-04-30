"use client"
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <Wrapper>
        <div className='logo'>BLOG-SITE</div>
        <Container>
            <Link href='/blog'>Blog</Link>
            <SignedIn>
              <Link href='/dashboard'>Dashboard</Link>
              <Link href='/about'>About</Link>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
        </Container>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.section`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;

  .logo{
    font-weight: 700;
    font-size: larger;
  }
`;

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    gap:20px;
    align-items: center;
`;
