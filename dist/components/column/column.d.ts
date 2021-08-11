import { FC, ReactNode } from 'react';
interface ColumnProps {
    /**
     * HTML Id.
     */
    id: string;
    /**
     * Enable to make the columns searchable.
     */
    isSearchable: boolean;
    /**
     * The children of the column.
     * @type ReactNode
     */
    children: ReactNode;
}
declare const Column: FC<ColumnProps>;
export default Column;
