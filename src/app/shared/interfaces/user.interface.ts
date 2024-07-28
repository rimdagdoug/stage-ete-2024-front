interface Authority {
    authority: string;
  }
  
  export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    username: string;
    role: string;
    enabled: boolean;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    accountNonLocked: boolean;
    authorities: Authority[];
  }
  
