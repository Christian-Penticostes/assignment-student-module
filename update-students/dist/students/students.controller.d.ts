import { StudentsService } from './students.service';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
}
