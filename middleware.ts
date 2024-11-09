import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export function middleware(request: NextRequest) {

    // Access token from cookies
    const token = true

    // Define Protected Routes
    const protectRoutes = ["/profile", "/admin"]
    

    // Condition to access the protected routes
    if (protectRoutes.some((route) => request.nextUrl.pathname.startsWith(route) )) {
        
        if (!token) {
            // Redirect unauthenticated users to login page
            return NextResponse.redirect(new URL("/login", request.url) )
        }
    }

    // Allow request to proceed if authenticated or if the route is not protected
    return NextResponse.next(); 

}

export const config = {
    matcher: ['/admin', '/profile'],
};