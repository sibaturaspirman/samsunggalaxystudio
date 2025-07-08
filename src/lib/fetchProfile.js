export async function fetchProfile(token) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: 'no-store', // SSR always fresh
      });
  
      if (!res.ok) {
        throw new Error('Unauthorized');
      }

      console.log(res)
  
      // return res.json();
    } catch (err) {
      return null;
    }
  }
  