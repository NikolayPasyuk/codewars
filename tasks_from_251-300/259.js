const findEmployeesRole = name => {
  const [firstName, lastName] = name.split(' ');

  const employee = employees.find(emp => emp.firstName === firstName && emp.lastName === lastName);

  return employee ? employee.role : "Does not work here!";
}
