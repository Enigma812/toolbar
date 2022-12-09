export interface Account {
    name: string;
    login: string;
    password: string;
    nativeLanguage: number;
    studingLanguage: number;
}

export const adminAccount: Account = {
    name: 'Админ',
    login: 'admin',
    password: '123',
    nativeLanguage: 1,
    studingLanguage: 2,
}