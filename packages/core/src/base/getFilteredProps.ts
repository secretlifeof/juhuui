function getFilteredProps(props: any, filter: string[]) {
  const filteredProps = { ...props };
  filter.forEach((prop) => delete filteredProps[prop]);
  return filteredProps;
}

export default getFilteredProps;
