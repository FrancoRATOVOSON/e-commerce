import {  } from '@prisma/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';



export function fakeShopper() {
  return {
    login: faker.lorem.words(5),
    password: faker.lorem.words(5),
  };
}
export function fakeShopperComplete() {
  return {
    id: faker.number.int(),
    login: faker.lorem.words(5),
    password: faker.lorem.words(5),
  };
}
export function fakeAdmin() {
  return {
    login: faker.lorem.words(5),
    password: faker.lorem.words(5),
  };
}
export function fakeAdminComplete() {
  return {
    id: faker.number.int(),
    login: faker.lorem.words(5),
    password: faker.lorem.words(5),
  };
}
export function fakeProduct() {
  return {
    name: faker.person.fullName(),
    price: faker.datatype.hexadecimal(),
    description: faker.lorem.words(5),
  };
}
export function fakeProductComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    price: faker.datatype.hexadecimal(),
    currency: 'MGA',
    categoryName: faker.string.uuid(),
    discount: 0,
    description: faker.lorem.words(5),
  };
}
export function fakeCategory() {
  return {
    name: faker.person.fullName(),
  };
}
export function fakeCategoryComplete() {
  return {
    slug: faker.string.uuid(),
    name: faker.person.fullName(),
  };
}
export function fakeTag() {
  return {
    slug: faker.lorem.words(5),
    label: faker.lorem.words(5),
  };
}
export function fakeTagComplete() {
  return {
    slug: faker.lorem.words(5),
    label: faker.lorem.words(5),
    categorySlug: faker.string.uuid(),
  };
}
export function fakeOrder() {
  return {
    facture: undefined,
    validatedAt: undefined,
    status: faker.lorem.words(5),
  };
}
export function fakeOrderComplete() {
  return {
    id: faker.number.int(),
    facture: undefined,
    shopperId: faker.number.int(),
    validatedAt: undefined,
    status: faker.lorem.words(5),
  };
}
export function fakeProductTagsComplete() {
  return {
    productId: faker.string.uuid(),
    tagSlug: faker.string.uuid(),
    categorySlug: faker.string.uuid(),
  };
}
export function fakeOrderProductComplete() {
  return {
    id: faker.number.int(),
    productId: faker.string.uuid(),
    orderId: faker.number.int(),
  };
}
