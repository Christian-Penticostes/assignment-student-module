import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    findAll(): Promise<import("./student.entity").Student[]>;
    findOne(id: string): Promise<import("./student.entity").Student>;
}
