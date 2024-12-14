/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthUserLoginImport } from './routes/auth/user/login'

// Create Virtual Routes

const ContactLazyImport = createFileRoute('/contact')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ContactLazyRoute = ContactLazyImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AuthUserLoginRoute = AuthUserLoginImport.update({
  id: '/auth/user/login',
  path: '/auth/user/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/user/login': {
      id: '/auth/user/login'
      path: '/auth/user/login'
      fullPath: '/auth/user/login'
      preLoaderRoute: typeof AuthUserLoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/contact': typeof ContactLazyRoute
  '/auth/user/login': typeof AuthUserLoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/contact': typeof ContactLazyRoute
  '/auth/user/login': typeof AuthUserLoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/contact': typeof ContactLazyRoute
  '/auth/user/login': typeof AuthUserLoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/contact' | '/auth/user/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/contact' | '/auth/user/login'
  id: '__root__' | '/' | '/about' | '/contact' | '/auth/user/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  ContactLazyRoute: typeof ContactLazyRoute
  AuthUserLoginRoute: typeof AuthUserLoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  ContactLazyRoute: ContactLazyRoute,
  AuthUserLoginRoute: AuthUserLoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/contact",
        "/auth/user/login"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/contact": {
      "filePath": "contact.lazy.tsx"
    },
    "/auth/user/login": {
      "filePath": "auth/user/login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
