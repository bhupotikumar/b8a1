const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    console.log(value * multiplier);
    return value * multiplier;
  } else {
    console.log(value * 2);
    return value * 2;
  }
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (value) {
    return "Active";
  } else return "Inactive";
};

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return ([] as T[]).concat(...arrays);
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  coursesList: Course[],
  minStudents: number,
): Course[] => {
  return coursesList.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};
