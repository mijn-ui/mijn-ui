/* eslint-disable */

import React from "react";

// Extracts the props of a given component or intrinsic element
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

// A type representing the `renderAs` prop, which allows the component to render as a different element or component
type AsProp<C extends React.ElementType> = {
  /**
   * An override of the default HTML tag.
   * Can also be another React component.
   */
  renderAs?: C;
};

/**
 * ExtendableProps: A utility type that merges two sets of props,
 * giving precedence to OverrideProps in case of conflicts.
 * - `ExtendedProps`: The original set of props.
 * - `OverrideProps`: The new set of props that override any duplicates from `ExtendedProps`.
 */
export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {},
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

/**
 * InheritableElementProps: A type that combines the props of a specific element type (C)
 * with additional props (Props), allowing for flexible component composition.
 * - `C`: The component or HTML element type.
 * - `Props`: Additional props to extend the base props of `C`.
 */
export type InheritableElementProps<
  C extends React.ElementType,
  Props = {},
> = ExtendableProps<PropsOf<C>, Props>;

/**
 * PolymorphicComponentProps: A more advanced version of InheritableElementProps
 * where the component can accept a `renderAs` prop to change the element type.
 * - `C`: The default component or HTML element type.
 * - `Props`: Additional props, including `renderAs`, which specifies the override component.
 */
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {},
> = InheritableElementProps<C, Props & AsProp<C>>;

// Extracts the ref type for a given component or element type
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

// Combines the PolymorphicComponentProps with a ref prop, allowing for typed refs
export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

// A utility type to add `displayName` property to any component
export type WithDisplayName<T> = T & { displayName?: string };
