import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

// at its simples access control is a yes or no value depending on the users session
export function isSignedIn({ session }: ListAccessArgs): boolean {
  return !!session;
}

const generatedPermissions = Object.entries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// permissions check if someone meets a criteria - yes or no
export const permissions = {
  ...generatedPermissions,
  // can add more permissions here
  isAwesome({ session }: ListAccessArgs): boolean {
    return session?.data.name.includes('philip');
  },
};

// rule based functions
