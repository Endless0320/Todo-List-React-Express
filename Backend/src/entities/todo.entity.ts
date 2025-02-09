import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "./core.entity";

@Entity("todo")
export class TodoEntity extends CoreEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid;
  @Column({ type: "varchar", nullable: true })
  user_id;
  @Column({ type: "varchar", nullable: false })
  title;
  @Column({ type: "varchar", nullable: false })
  description;
  @Column({ type: "varchar", nullable: false })
  due_date;
  @Column({ type: "boolean", nullable: true, default: false })
  completed;
}
