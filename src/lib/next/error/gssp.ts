import { GetServerSidePropsResult, Redirect } from "next";

export class GsspError extends Error {
  statusCode = -1;
  toGsspResult(): GetServerSidePropsResult<never> {
    return {
      notFound: true,
    };
  }
}

export class UnauthorizedGsspError extends GsspError {
  statusCode = 401;
  redirect: Redirect = {
    destination: "/login",
    permanent: false,
  };
  constructor(redirect?: Redirect) {
    super("UnauthorizedGsspError");
    if (redirect) {
      this.redirect = redirect;
    }
  }
  toGsspResult(): GetServerSidePropsResult<never> {
    return {
      redirect: this.redirect,
    };
  }
}

export class NotFoundGsspError extends GsspError {
  statusCode = 404;
  toGsspResult(): GetServerSidePropsResult<never> {
    return {
      notFound: true,
    };
  }
}
