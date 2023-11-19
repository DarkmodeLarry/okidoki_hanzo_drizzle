import * as z from 'zod'

export const CustomerBasicSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First name should be at least 1 character long' }),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, { message: 'Last name should be at least 1 character long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone number should be at least 10 characters long' })
})

export const CustomerSpouseSchema = z.object({
  spouseFirstName: z
    .string()
    .trim()
    .min(1, { message: 'First name should be at least 1 character long' }),
  spouseMiddleName: z.string().trim().optional(),
  spouseLastName: z
    .string()
    .trim()
    .min(1, { message: 'Last name should be at least 1 character long' }),
  spouseEmail: z.string().email({ message: 'Invalid email address' }),
  spousePhone: z
    .string()
    .min(10, { message: 'Phone number should be at least 10 characters long' }),
  spouseDriversLicense: z.string().trim().min(1, { message: 'Drivers license number is required' }),
  spouseSex: z.string().trim(),
  spouseDOB: z.string().trim()
})

export const AddSiblingSchema = z.object({
  siblingFirstName: z
    .string()
    .trim()
    .min(1, { message: 'First name should be at least 1 character long' }),
  siblingMiddleName: z.string().trim().optional(),
  siblingLastName: z
    .string()
    .trim()
    .min(1, { message: 'Last name should be at least 1 character long' }),
  siblingEmail: z.string().email({ message: 'Invalid email address' }),
  siblingPhone: z
    .string()
    .min(10, { message: 'Phone number should be at least 10 characters long' }),
  siblingDriversLicense: z
    .string()
    .trim()
    .min(1, { message: 'Drivers license number is required' }),
  siblingSex: z.string().trim(),
  siblingDOB: z.string().trim()
})

export const AddChildSchema = z.object({
  childFirstName: z
    .string()
    .trim()
    .min(1, { message: 'First name should be at least 1 character long' }),
  childMiddleName: z.string().trim().optional(),
  childLastName: z
    .string()
    .trim()
    .min(1, { message: 'Last name should be at least 1 character long' }),
  childEmail: z.string().email({ message: 'Invalid email address' }),
  childPhone: z.string().min(10, { message: 'Phone number should be at least 10 characters long' }),
  childDriversLicense: z.string().trim().min(1, { message: 'Drivers license number is required' }),
  childSex: z.string().trim(),
  childDOB: z.string().trim()
})

export const AddAddressSchema = z.object({
  streetAddress: z
    .string()
    .trim()
    .min(1, { message: 'Street address should be at least 1 character long' }),
  city: z.string().trim().min(1, { message: 'A city name is required' }),
  state: z.string().trim().min(1, { message: 'A state name is required' }),
  zip: z.string().trim().min(1, { message: 'A zip code is required' })
})
