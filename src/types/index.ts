import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';
import octokit from '@/utils/octokit';

export type Issues = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.issues.listForRepo
>;

export type User = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.users.getAuthenticated
>;
