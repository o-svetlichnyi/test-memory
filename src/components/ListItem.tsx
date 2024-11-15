interface ListItemProps {
  index: number;
  title: string;
  description: string;
}

const ListItem = ({ index, title, description }: ListItemProps) => {
  return (
    <li className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <div className="flex items-start">
        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mr-4 p-6">
          {index}
        </span>
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
