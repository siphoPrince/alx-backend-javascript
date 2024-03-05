export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList
  };

  const getNumberOfDepartments = () => {
    return Object.keys(employeesList).length;
  };

  return {
    allEmployees,
    getNumberOfDepartments
  };
}

