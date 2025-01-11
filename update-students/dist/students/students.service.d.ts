import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
export declare class StudentsService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
}
