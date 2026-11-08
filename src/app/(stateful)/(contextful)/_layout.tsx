import { Stack } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

export default function LayoutRouting() {
  const domain = "test";
  const loggedIn = false;
  const isMainLogicalHost = true;
  const hasCommunityMembership = false;
  const [loading, setLoading] = useState(true);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const loadInitialData = useCallback(async () => {
    try {
      console.log("LayoutRouting loadInitialData isMainLogicalHost = " + isMainLogicalHost + ", domain: " + domain);
      setLoading(true);
      await sleep(500);

      console.log("Finished");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [domain, isMainLogicalHost]);

  useEffect(() => {
    console.log("useEffect called");
    loadInitialData();
  }, [loadInitialData]);

  if (loading) {
    console.log("Loading, returning null");
    return null;
  }

  console.log("LayoutRouting render isMainLogicalHost = " + isMainLogicalHost + ", loggedIn: " + loggedIn + ", hasCommunityMembership: " + hasCommunityMembership);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isMainLogicalHost}>
        <Stack.Screen name="(maindomain-loggedinorout-tabs)" options={{ headerShown: false }} />

        <Stack.Protected guard={!loggedIn}>
          <Stack.Screen name="(maindomain-loggedout-stack)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={loggedIn}>
          <Stack.Screen name="(maindomain-loggedin-stack)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack.Protected>

      <Stack.Protected guard={!isMainLogicalHost}>

        <Stack.Protected guard={!loggedIn}>
          <Stack.Screen name="(community-loggedout-stack)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={loggedIn}>
        </Stack.Protected>

        <Stack.Screen name="(community-loggedinorout-stack)" options={{ headerShown: false }} />

      </Stack.Protected>

      <Stack.Screen name="(universal-loggedinorout-stack)" options={{ headerShown: false }} />

      <Stack.Protected guard={loggedIn}>
        <Stack.Screen name="(universal-loggedin-stack)" options={{ headerShown: false }} />
      </Stack.Protected>
      
      <Stack.Protected guard={!loggedIn}>
        <Stack.Screen name="(universal-loggedout-stack)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
