import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const creditCards = [
  {
    id: 1,
    bank: "HDFC Bank",
    number: "1234 5678 9012 3456",
    holder: "AMIT KUMAR",
    expiry: "12/25",
    type: "visa",
    color: "bg-gradient-to-r from-blue-600 to-blue-400",
  },
  {
    id: 2,
    bank: "ICICI Bank",
    number: "5678 9012 3456 7890",
    holder: "AMIT KUMAR",
    expiry: "06/24",
    type: "mastercard",
    color: "bg-gradient-to-r from-purple-600 to-purple-400",
  },
  {
    id: 3,
    bank: "SBI",
    number: "9012 3456 7890 1234",
    holder: "AMIT KUMAR",
    expiry: "03/26",
    type: "visa",
    color: "bg-gradient-to-r from-indigo-600 to-indigo-400",
  },
];

const bankAccounts = [
  {
    id: 1,
    bank: "HDFC Bank",
    accountType: "Savings",
    accountNumber: "****6789",
    balance: "$12,450.00",
  },
  {
    id: 2,
    bank: "ICICI Bank",
    accountType: "Current",
    accountNumber: "****4321",
    balance: "$8,275.00",
  },
  {
    id: 3,
    bank: "SBI",
    accountType: "Savings",
    accountNumber: "****9876",
    balance: "$3,837.00",
  },
];

const categorySpending = [
  { category: "Food & Dining", amount: 850, color: "bg-blue-500" },
  { category: "Shopping", amount: 640, color: "bg-purple-500" },
  { category: "Transportation", amount: 420, color: "bg-green-500" },
  { category: "Entertainment", amount: 320, color: "bg-yellow-500" },
  { category: "Bills & Utilities", amount: 780, color: "bg-red-500" },
];

const securityAlerts = [
  {
    id: 1,
    type: "Suspicious Login",
    account: "HDFC Account",
    status: "Resolved",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "Large Transaction",
    account: "ICICI Account",
    status: "Pending",
    timestamp: "1 day ago",
  },
];

const Banks = () => {
  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">Your Credit Cards</h3>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Card
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {creditCards.map((card) => (
          <div
            key={card.id}
            className={`${card.color} p-6 rounded-xl text-white shadow-lg transform transition-transform hover:scale-105`}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm opacity-80">{card.bank}</p>
                <p className="font-mono text-lg mt-1">
                  {card.number.replace(/(\d{4})/g, "$1 ")}
                </p>
              </div>
              <div className="text-right">
                <img
                  src={`/lovable-uploads/${card.type === "visa" ? "visa.png" : "mastercard.png"}`}
                  alt={card.type}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs opacity-80">Card Holder</p>
                <p className="font-mono">{card.holder}</p>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-80">Expires</p>
                <p className="font-mono">{card.expiry}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Category Spending</h3>
            <div className="space-y-4">
              {categorySpending.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">{item.category}</span>
                    <span className="font-medium">${item.amount}</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-dark-border rounded-full">
                    <div
                      className={`h-2 ${item.color} rounded-full transition-all duration-500`}
                      style={{
                        width: `${(item.amount / 1000) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Security & Fraud Detection</h3>
            <div className="space-y-4">
              {securityAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-3 bg-secondary dark:bg-dark-border rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{alert.type}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {alert.account} • {alert.timestamp}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      alert.status === "Resolved"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                    }`}
                  >
                    {alert.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Connected Bank Accounts</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bank Name</TableHead>
                <TableHead>Account Type</TableHead>
                <TableHead>Account Number</TableHead>
                <TableHead className="text-right">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bankAccounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell className="font-medium">{account.bank}</TableCell>
                  <TableCell>{account.accountType}</TableCell>
                  <TableCell>{account.accountNumber}</TableCell>
                  <TableCell className="text-right">{account.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </Layout>
  );
};

export default Banks;
