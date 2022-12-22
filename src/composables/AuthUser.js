import { ref } from "vue";
import useSupabase from "./Supabase";
const user = ref(null);
export default function useAuthUser() {
  const { supabase } = useSupabase();

  /**
   * Login with google, github, etc
   */
  const loginWithSocialProvider = async (token) => {
    const { user, error } = await supabase.auth.signIn({ provider });
    if (error) throw error;
    return user;
  }
  /**
   * Logout
   */
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };
  const isLoggedIn = () => {
    return !!user.value;
  };

  return {
    user,
    loginWithSocialProvider,
    isLoggedIn,
    logout
  };
}