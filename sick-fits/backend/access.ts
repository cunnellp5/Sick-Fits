/* eslint-disable @typescript-eslint/no-unsafe-call */
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
// Rules can return a boolean - yes or no - or a filter which limits which products they can CRUD.
export const rules = {
  canManageProducts({
    session,
  }: ListAccessArgs): boolean | { user: { id: string } } {
    // 1 do they have permission of canManageProducts
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2 if not, do they own this item
    return { user: { id: session.itemId } };
  },
  canReadProducts({ session }: ListAccessArgs): boolean | { status: string } {
    if (permissions.canManageProducts({ session })) {
      return true; // they can read everything
    }
    // they should only see available products (based on the status field)
    return { status: 'AVAILABLE' };
  },
};
